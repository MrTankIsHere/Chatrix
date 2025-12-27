# Chatrix Setup Guide

## Running the Project

This project requires **two processes** to run simultaneously:

### 1. Start the Realtime Server (Socket.IO)
```bash
npm run server
```
This starts the Socket.IO server on `http://localhost:3001`

### 2. Start the Frontend Dev Server
```bash
npm run dev
```
This starts the Vite dev server on `http://localhost:5173`

## How to Use

1. Open `http://localhost:5173` in your browser
2. Connect your Solana wallet (Phantom, etc.)
3. Complete profile setup
4. Add contacts by:
   - Wallet address (e.g., `7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU`)
   - Username (e.g., `@username`)
5. Start chatting - messages will be delivered in real-time!

## Features Now Working

✅ **Real-time messaging** - Messages are sent and received via Socket.IO
✅ **Add contacts** - Add peers by wallet address or username
✅ **Persistent chats** - Chat history persists across page reloads
✅ **Dynamic updates** - UI updates reactively when messages arrive
✅ **Connection status** - Shows connection status in header

## Troubleshooting

- **Can't connect**: Make sure both servers are running
- **Messages not sending**: Check browser console for errors
- **Contacts not showing**: Refresh the page after adding a contact

## Environment Variables (Optional)

To use a different WebSocket URL, create a `.env` file:
```
VITE_WEBSOCKET_URL=http://your-server-url:3001
```

