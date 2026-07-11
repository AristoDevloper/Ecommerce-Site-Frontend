import { useState, useRef, useEffect } from 'react';

export function DesktopConversationsPage({
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
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
        if (!inputText.trim()) return;
        onSendMessage(inputText);
        setInputText('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const formatTime = (isoString) => {
        const date = new Date(isoString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        const diffHrs = Math.floor(diffMins / 60);
        if (diffHrs < 24) return `${diffHrs}h ago`;
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const getOtherParticipant = (conv) => {
        if (!currentUser) return { username: '...', id: null };
        if (conv.user1_id === currentUser.id) return { username: conv.user2_username, id: conv.user2_id };
        return { username: conv.user1_username, id: conv.user1_id };
    };

    return (
        <div className="bg-background text-on-surface font-body antialiased h-screen flex flex-col overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 flex overflow-hidden">

                    {/* Left Pane: Conversation List */}
                    <section className="w-full md:w-[400px] flex-shrink-0 flex flex-col border-r border-outline-variant/20 bg-white">
                        <div className="p-6 border-b border-outline-variant/10">
                            <h2 className="text-lg font-headline font-bold text-primary mb-4">Messages</h2>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
                                <input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border-none rounded-lg focus:ring-1 focus:ring-primary/20 transition-all font-body text-sm outline-none" placeholder="Search conversations..." type="text" />
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {loadingConvs ? (
                                <div className="flex items-center justify-center py-12">
                                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            ) : conversations.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center text-on-surface-variant">
                                    <span className="material-symbols-outlined text-4xl mb-3 text-outline-variant" style={{ fontVariationSettings: "'wght' 200" }}>chat_bubble</span>
                                    <p className="text-sm">No conversations yet.</p>
                                </div>
                            ) : conversations.map((conv) => {
                                const other = getOtherParticipant(conv);
                                const isActive = selectedConversation?.uuid === conv.uuid;
                                return (
                                    <div
                                        key={conv.uuid}
                                        onClick={() => onSelectConversation(conv)}
                                        className={`group relative flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${isActive ? 'bg-surface-container-low border border-primary/10' : 'hover:bg-surface-container-low'}`}
                                    >
                                        {/* Avatar */}
                                        <div className="relative h-12 w-12 flex-shrink-0">
                                            <div className="h-full w-full rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-lg">
                                                {other.username.charAt(0).toUpperCase()}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm font-headline font-bold text-on-surface truncate">{other.username}</h3>
                                                <span className="text-[10px] font-label font-medium text-outline whitespace-nowrap ml-2">
                                                    {conv.last_message ? formatTime(conv.last_message.created_at) : formatTime(conv.created_at)}
                                                </span>
                                            </div>
                                            {conv.last_message ? (
                                                <p className="text-[11px] font-body text-on-surface-variant truncate mt-0.5">
                                                    {conv.last_message.sender_username === (currentUser?.username || '') ? 'You: ' : ''}{conv.last_message.content}
                                                </p>
                                            ) : (
                                                <p className="text-[11px] font-body text-on-surface-variant/50 italic mt-0.5">No messages yet</p>
                                            )}
                                        </div>
                                        {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-primary rounded-r-full"></div>}
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Right Pane: Messaging Section */}
                    <section className="flex-1 flex flex-col bg-surface-bright relative">
                        {!selectedConversation ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-center text-on-surface-variant p-12">
                                <span className="material-symbols-outlined text-8xl text-outline-variant mb-6" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>chat</span>
                                <h2 className="font-headline text-2xl text-primary mb-2">Select a Conversation</h2>
                                <p className="text-sm max-w-xs leading-relaxed">Choose a conversation from the left panel to start messaging.</p>
                            </div>
                        ) : (
                            <>
                                {/* Chat Header */}
                                <div className="h-20 shrink-0 px-8 border-b border-outline-variant/10 bg-white/50 backdrop-blur-md flex items-center justify-between z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">
                                            {getOtherParticipant(selectedConversation).username.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-headline font-bold text-on-surface leading-tight">{getOtherParticipant(selectedConversation).username}</h2>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2.5 rounded-full hover:bg-surface-container-low transition-colors">
                                            <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Message History */}
                                <div className="flex-1 overflow-y-auto px-8 py-10 space-y-6 flex flex-col scroll-smooth">
                                    {loadingMessages ? (
                                        <div className="flex items-center justify-center py-12">
                                            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    ) : messages.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center flex-1 text-on-surface-variant">
                                            <span className="material-symbols-outlined text-4xl mb-2 text-outline-variant" style={{ fontVariationSettings: "'wght' 200" }}>waving_hand</span>
                                            <p className="text-sm">Start the conversation!</p>
                                        </div>
                                    ) : messages.map((msg) => {
                                        const isOwnMessage = msg.sender === currentUser?.id || msg.sender_username === currentUser?.username;
                                        return (
                                            <div key={msg.id} className={`flex gap-4 max-w-[75%] ${isOwnMessage ? 'self-end flex-row-reverse' : ''}`}>
                                                {!isOwnMessage && (
                                                    <div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-xs shrink-0 mt-auto">
                                                        {msg.sender_username?.charAt(0).toUpperCase()}
                                                    </div>
                                                )}
                                                <div className={`space-y-1 ${isOwnMessage ? 'text-right' : ''}`}>
                                                    <div className={`p-4 rounded-2xl shadow-sm ${isOwnMessage ? 'bg-primary text-on-primary rounded-br-none' : 'bg-white text-on-surface-variant rounded-bl-none border border-outline-variant/5'}`}>
                                                        <p className="text-sm leading-relaxed">{msg.content}</p>
                                                    </div>
                                                    <span className="text-[10px] text-outline px-1">{formatTime(msg.created_at)}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Message Bar — no file/image buttons for buyers */}
                                <div className="p-6 bg-white border-t border-outline-variant/10">
                                    <div className="max-w-4xl mx-auto relative flex items-center gap-3">
                                        <div className="flex-1 relative">
                                            <input
                                                className="w-full bg-surface-container-low border-none rounded-full py-3 px-6 pr-12 text-sm focus:ring-1 focus:ring-primary/20 outline-none placeholder:text-outline/60"
                                                placeholder={`Message ${getOtherParticipant(selectedConversation).username}...`}
                                                type="text"
                                                value={inputText}
                                                onChange={(e) => setInputText(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                            />
                                        </div>
                                        <button
                                            onClick={handleSend}
                                            disabled={!inputText.trim()}
                                            className="h-11 w-11 rounded-full bg-primary text-on-primary flex items-center justify-center hover:shadow-lg transition-all active:scale-95 shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
                                        >
                                            <span className="material-symbols-outlined">send</span>
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}
