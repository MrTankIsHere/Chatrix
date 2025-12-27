import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { RecipientInput } from './RecipientInput';
import { useToast } from './ui/Toast';
import type { Peer } from '../types/message';

interface Props {
  onSendMessage: (content: string, recipientPublicKey: string) => Promise<void>;
  recentPeers: Peer[];
}

export const MessageInput: React.FC<Props> = ({ onSendMessage, recentPeers }) => {
  const { success, error } = useToast();
  const [message, setMessage] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [sending, setSending] = useState(false);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recipientAddress || !message.trim() || sending) {
      return;
    }

    try {
      setSending(true);
      await onSendMessage(message.trim(), recipientAddress);

      // Clear form after successful send
      setMessage('');
      success('Message sent!', 'Your message has been encrypted and sent successfully.');
    } catch (err) {
      console.error('Failed to send message:', err);
      error('Failed to send message', 'Please check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  // File attachment UI removed

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-foreground border-t border-border space-y-4">
      <RecipientInput
        onRecipientSelect={setRecipientAddress}
        recentPeers={recentPeers}
      />

      {/* Attachment preview removed */}

      <div className="flex items-center gap-2">
        {/* Attachment button removed */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="input flex-1 bg-card-highlight border-border"
          disabled={sending}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: sending || !recipientAddress || !message.trim() ? 1 : 1.05 }}
          whileTap={{ scale: sending || !recipientAddress || !message.trim() ? 1 : 0.95 }}
          className={`p-2 rounded-lg transition-all duration-200 ${
            sending || !recipientAddress || !message.trim()
              ? 'bg-card-highlight cursor-not-allowed opacity-50'
              : 'bg-gradient-tertiary hover:opacity-90 shadow-lg hover:shadow-xl'
          }`}
          disabled={sending || !recipientAddress || !message.trim()}
          title={sending ? 'Sending...' : 'Send message'}
          aria-label={sending ? 'Sending...' : 'Send message'}
        >
          <motion.div
            animate={sending ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 1, repeat: sending ? Infinity : 0, ease: 'linear' }}
          >
            <Send className={`w-5 h-5 text-white ${sending ? 'animate-pulse' : ''}`} />
          </motion.div>
        </motion.button>
      </div>
    </form>
  );
};