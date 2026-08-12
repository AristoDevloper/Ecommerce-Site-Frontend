import { API_BASE_URL } from '../../config/api';
import './ConversationsPage.css';
import { useState, useEffect, useRef } from 'react';
import { DesktopConversationsPage } from './DesktopConversationsPage';
import { MobileConversationsPage } from './MobileConversationsPage';
import './MobileConversationsPage.css';

export function ConversationsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingConvs, setLoadingConvs] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const wsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch current user info
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/profile/', { credentials: 'include` });
        if (res.ok) {
          const data = await res.json();
          setCurrentUser(data);
        }
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    };
    fetchUser();
  }, []);

  // Fetch conversations
  useEffect(() => {
    const fetchConversations = async () => {
      setLoadingConvs(true);
      try {
        const res = await fetch(`${API_BASE_URL}/chat/rooms/', { credentials: 'include` });
        if (res.ok) {
          const data = await res.json();
          console.log('Fetched conversations:', data);
          setConversations(data);
        }
      } catch (err) {
        console.error('Failed to fetch conversations:', err);
      } finally {
        setLoadingConvs(false);
      }
    };
    fetchConversations();
  }, []);

  // Load message history when conversation selected
  useEffect(() => {
    if (!selectedConversation) return;

    const fetchMessages = async () => {
      setLoadingMessages(true);
      try {
        const res = await fetch(`${API_BASE_URL}/chat/rooms/${selectedConversation.uuid}/messages/`, { credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          setMessages(data);
        }
      } catch (err) {
        console.error('Failed to fetch messages:', err);
      } finally {
        setLoadingMessages(false);
      }
    };
    fetchMessages();

    // Set up WebSocket connection
    if (wsRef.current) {
      wsRef.current.close();
    }

    const uuid = selectedConversation.uuid;
    const wsUrl = `ws://localhost:8000/ws/chat/${uuid}/`;

    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages(prev => {
          // Replace temp optimistic message (same content + sender) with the confirmed one from DB
          const withoutTemp = prev.filter(m =>
            !(String(m.id).startsWith('temp-') &&
              m.content === data.message &&
              m.sender_username === data.sender_username)
          );
          // Avoid duplicate if same message_id already exists
          if (withoutTemp.some(m => m.id === data.message_id)) return withoutTemp;
          return [...withoutTemp, {
            id: data.message_id,
            content: data.message,
            sender: data.sender_id,
            sender_username: data.sender_username,
            created_at: data.created_at,
          }];
        });
      } catch (err) {
        console.error('WS message parse error:', err);
      }
    };

    ws.onerror = (err) => console.error('WebSocket error:', err);

    return () => {
      ws.close();
    };
  }, [selectedConversation]);

  const sendMessage = (messageText) => {
    if (!messageText.trim()) return;

    // Optimistic update: show the message immediately before WS echo
    const optimisticMsg = {
      id: `temp-${Date.now()}`,
      content: messageText,
      sender: currentUser?.id,
      sender_username: currentUser?.user,
      created_at: new Date().toISOString(),
    };
    setMessages(prev => [...prev, optimisticMsg]);

    // Send via WebSocket if connected, otherwise the message is already visible
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ message: messageText }));
    }
  };

  const selectConversation = (conv) => {
    setSelectedConversation(conv);
    setMessages([]);
  };

  const sharedProps = {
    conversations,
    selectedConversation,
    messages,
    currentUser,
    loadingConvs,
    loadingMessages,
    onSelectConversation: selectConversation,
    onSendMessage: sendMessage,
  };

  return (
    <>{isMobile ? <MobileConversationsPage {...sharedProps} /> : <DesktopConversationsPage {...sharedProps} />}</>
  );
}

export default ConversationsPage;
