import { useState, useRef, useEffect } from 'react';

export function MobileConversationsPage({
    conversations,
    selectedConversation,
    messages,
    currentUser,
    loadingConvs,
    loadingMessages,
    onSelectConversation,
    onSendMessage,
}) {
    const [inputText, setInputText] = useState('');
    const [chatOpen, setChatOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const messagesEndRef = useRef(null);

    // Scroll to bottom on new messages
    useEffect(() => {
        if (chatOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, chatOpen]);

    // Clear input when switching conversations
    useEffect(() => {
        setInputText('');
    }, [selectedConversation]);

    const handleSend = () => {
        if (!inputText.trim()) return;
        onSendMessage(inputText);
        setInputText('');
    };

    const handleSelectConversation = (conv) => {
        onSelectConversation(conv);
        setClosing(false);
        setChatOpen(true);
    };

    const handleBack = () => {
        setClosing(true);
        setTimeout(() => {
            setChatOpen(false);
            setClosing(false);
        }, 220);
    };

    const formatTime = (isoString) => {
        if (!isoString) return '';
        const date = new Date(isoString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m`;
        const diffHrs = Math.floor(diffMins / 60);
        if (diffHrs < 24) return `${diffHrs}h`;
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const getOtherParticipant = (conv) => {
        if (!conv || !currentUser) return { username: '...', id: null };
        if (conv.user1_id === currentUser.id) return { username: conv.user2_username, id: conv.user2_id };
        return { username: conv.user1_username, id: conv.user1_id };
    };

    return (
        <div className="bg-background text-on-surface min-h-screen relative">

            {/* ─── Conversation List ─── */}
            <main className="pt-20 pb-24 px-4 max-w-md mx-auto">
                <h1 className="font-headline text-2xl text-primary mb-6 tracking-tight">Messages</h1>
                <div className="space-y-3">
                    {loadingConvs ? (
                        <div className="flex items-center justify-center py-16">
                            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : conversations.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center text-on-surface-variant">
                            <span className="material-symbols-outlined text-6xl mb-4 text-outline-variant" style={{ fontVariationSettings: "'wght' 200" }}>chat_bubble</span>
                            <h2 className="font-headline text-xl text-primary mb-2">No Conversations</h2>
                            <p className="text-sm max-w-[220px] leading-relaxed text-on-surface-variant">
                                Start chatting with a seller from any product page.
                            </p>
                        </div>
                    ) : conversations.map((conv) => {
                        const other = getOtherParticipant(conv);
                        const isSelected = selectedConversation?.uuid === conv.uuid;
                        return (
                            <div
                                key={conv.uuid}
                                onClick={() => handleSelectConversation(conv)}
                                className={`rounded-xl p-4 flex gap-4 items-center transition-all active:scale-[0.98] cursor-pointer ${isSelected ? 'bg-primary/5 border border-primary/20' : 'bg-surface-container-lowest'}`}
                            >
                                {/* Avatar */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-xl">
                                        {other.username.charAt(0).toUpperCase()}
                                    </div>
                                </div>
                                {/* Info */}
                                <div className="flex-grow min-w-0">
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-on-surface truncate">{other.username}</h3>
                                        <span className="text-[10px] font-bold text-outline uppercase tracking-wider ml-2 shrink-0">
                                            {conv.last_message ? formatTime(conv.last_message.created_at) : formatTime(conv.created_at)}
                                        </span>
                                    </div>
                                    {conv.last_message ? (
                                        <p className="text-xs text-on-surface-variant truncate mt-0.5">
                                            {conv.last_message.sender_username === currentUser?.username ? 'You: ' : ''}{conv.last_message.content}
                                        </p>
                                    ) : (
                                        <p className="text-xs text-on-surface-variant/50 italic mt-0.5">No messages yet — tap to start</p>
                                    )}
                                </div>
                                <span className="material-symbols-outlined text-outline-variant text-lg shrink-0">chevron_right</span>
                            </div>
                        );
                    })}
                </div>
            </main>

            {/* ─── Full-Screen Chat Panel (Slide-Up Overlay) ─── */}
            {chatOpen && selectedConversation && (() => {
                const other = getOtherParticipant(selectedConversation);
                return (
                    <div
                        className={`fixed inset-0 bg-background flex flex-col z-50 ${closing ? 'chat-panel-close' : 'chat-panel-open'}`}
                        style={{ willChange: 'transform' }}
                    >
                        {/* Chat Header */}
                        <div className="flex-shrink-0 h-16 px-4 bg-white border-b border-outline-variant/10 flex items-center gap-4 shadow-sm">
                            <button
                                onClick={handleBack}
                                className="p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors"
                            >
                                <span className="material-symbols-outlined text-on-surface">arrow_back</span>
                            </button>
                            <div className="h-9 w-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-sm flex-shrink-0">
                                {other.username.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-base font-headline font-bold text-on-surface leading-tight truncate">{other.username}</h2>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-5 flex flex-col bg-surface-bright">
                            {loadingMessages ? (
                                <div className="flex items-center justify-center flex-1 py-12">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                        <p className="text-xs text-on-surface-variant uppercase tracking-widest">Loading messages...</p>
                                    </div>
                                </div>
                            ) : messages.length === 0 ? (
                                <div className="flex flex-col items-center justify-center flex-1 text-on-surface-variant text-center gap-3">
                                    <div className="w-16 h-16 rounded-full bg-primary-container/30 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'wght' 200" }}>waving_hand</span>
                                    </div>
                                    <p className="text-sm font-medium text-on-surface">Say hello to {other.username}!</p>
                                    <p className="text-xs text-on-surface-variant max-w-[180px] leading-relaxed">This is the beginning of your conversation.</p>
                                </div>
                            ) : messages.map((msg) => {
                                const isOwn = msg.sender === currentUser?.id || msg.sender_username === currentUser?.username;
                                return (
                                    <div
                                        key={msg.id}
                                        className={`flex gap-3 max-w-[82%] ${isOwn ? 'self-end flex-row-reverse' : 'self-start'}`}
                                    >
                                        {!isOwn && (
                                            <div className="h-7 w-7 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-[10px] shrink-0 mt-auto">
                                                {msg.sender_username?.charAt(0).toUpperCase()}
                                            </div>
                                        )}
                                        <div className={`space-y-1 ${isOwn ? 'items-end' : 'items-start'} flex flex-col`}>
                                            <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${isOwn
                                                ? 'bg-primary text-on-primary rounded-br-none'
                                                : 'bg-white text-on-surface-variant rounded-bl-none border border-outline-variant/10'
                                            }`}>
                                                {msg.content}
                                            </div>
                                            <span className="text-[10px] text-outline px-1">{formatTime(msg.created_at)}</span>
                                        </div>
                                    </div>
                                );
                            })}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Message Input Bar — text only for buyers */}
                        <div className="flex-shrink-0 px-4 py-3 bg-white border-t border-outline-variant/10 safe-area-bottom">
                            <div className="flex items-center gap-3">
                                <div className="flex-1 bg-surface-container-low rounded-full px-5 py-3 flex items-center">
                                    <input
                                        className="flex-1 bg-transparent text-sm outline-none placeholder:text-outline/60 text-on-surface"
                                        placeholder={`Message ${other.username}...`}
                                        type="text"
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                handleSend();
                                            }
                                        }}
                                        autoFocus
                                    />
                                </div>
                                <button
                                    onClick={handleSend}
                                    disabled={!inputText.trim()}
                                    className="h-11 w-11 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-90 transition-all shrink-0 disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-primary/20"
                                >
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })()}
        </div>
    );
}
