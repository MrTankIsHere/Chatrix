# 🚀 Chatrix

> **The Future of Decentralized Communication**

A revolutionary peer-to-peer messaging platform built on Solana blockchain featuring end-to-end encryption, real-time communication, and a world-class user experience.

![Chatrix Banner](https://raw.githubusercontent.com/AP3X-Dev/Chatrix/refs/heads/main/public/screencapture.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solana](https://img.shields.io/badge/Built%20on-Solana-9945FF)](https://solana.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org)

## ✨ Overview

Chatrix has been completely transformed into a **next-generation decentralized messaging platform** that rivals Discord, Telegram, and WhatsApp while maintaining true Web3 principles. With real-time communication, advanced encryption, and a stunning user interface, Chatrix represents the future of digital communication.

## 🌟 Revolutionary Features

### 🔐 **Military-Grade Security**
- **End-to-End Encryption**: Advanced encryption with forward secrecy
- **Message Signing**: Cryptographic verification of message authenticity
- **Ephemeral Keys**: New encryption keys for every message
- **Zero-Knowledge**: Your private keys never leave your device

### � **Next-Gen Messaging**
- **Real-time Communication**: Instant message delivery via WebSocket
- **Direct Chats**: One-to-one secure conversations
- **Text Messaging**: Send secure end-to-end encrypted text messages
- **Message Reactions**: Express yourself with emoji reactions
- **Threading**: Reply to specific messages with context
- **Typing Indicators**: See when others are typing
- **Read Receipts**: Know when messages are delivered and read

### 👤 **User Identity**
- Local username stored on device

### 🎨 **World-Class UI/UX**
- **Modern Design**: Beautiful glassmorphism effects and Solana gradients
- **Smooth Animations**: 60fps animations powered by Framer Motion
- **Three-Panel Layout**: Chat sidebar, main chat, and persistent peer list
- **Dark/Light Themes**: Stunning themes that adapt to your preference
- **Mobile Responsive**: Perfect experience on all devices
- **Accessibility**: Full keyboard navigation and screen reader support

### ⚡ **Performance & Scalability**
- **Virtual Scrolling**: Handle thousands of messages smoothly
- **Message Caching**: Lightning-fast loading of conversations
- **Optimistic Updates**: Instant UI feedback for better UX
- **Offline Support**: Queue messages when disconnected
- **Real-time Sync**: Seamless synchronization across devices

## Tech Stack

- **Frontend**
  - React 18 with TypeScript for a robust component-based architecture
  - Tailwind CSS for responsive and customized styling
  - Lucide React for consistent, high-quality icons
  - Vite for fast development and optimized builds

- **Blockchain Integration**
  - Solana Web3.js for blockchain interactions
  - Wallet Adapter for seamless Phantom wallet integration
  - Public key-based user identification

- **Security & Storage**
  - TweetNaCl for military-grade end-to-end encryption
  - LocalStorage for efficient message persistence and offline access
  - Message signing for authentication and integrity verification

## Getting Started

### Prerequisites

- Node.js 18 or higher
- A Solana wallet (e.g., Phantom)
- Git (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AP3X-Dev/Chatrix.git
cd Chatrix
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Notes

File/media attachment UI is currently disabled in this version.

## Usage

1. **Connect Wallet**
   - Click the "Select Wallet" button on the welcome screen
   - Approve the connection in your Phantom wallet
   - Set up your username when prompted to complete your profile

2. **Navigate the Interface**
   - View your recent conversations in the main panel
   - Browse quick actions for upcoming features (marked with "Soon" indicators)
   - See your recent peers in the side panel (open by default)
   - Toggle dark/light mode with the theme button in the header

3. **Send Messages**
   - Enter recipient's Solana address or select from recent peers
   - Type your message in the input field
   - Click the send button (gradient arrow) to encrypt and transmit
   - View message status indicators for sent messages

4. **Manage Contacts**
   - Browse your recent peers in the side panel
   - Set nicknames for easy identification by clicking the edit icon
   - Monitor peer activity status with the status indicators
   - Click on a peer to start a new conversation

5. **File Attachments**
   - The file/media attachment UI has been removed for now.

## Security Features

- **End-to-End Encryption**: All messages are encrypted using TweetNaCl's box encryption with public/private key pairs
- **Blockchain Authentication**: Wallet-based authentication ensures message integrity and sender verification
- **Decentralized Storage**: Messages are stored locally
- **No Central Server**: Direct peer-to-peer communication model eliminates central points of failure
- **Message Signing**: Digital signatures verify the authenticity of each message
- **Local Data**: Sensitive information never leaves your device without encryption

## Development

### Project Structure

```
Chatrix/
├── public/                # Static assets
│   ├── chatrix-logo.svg   # Application logo
│   └── solana-icon.svg    # Solana icon
├── src/
│   ├── components/        # React components
│   │   ├── MessageInput.tsx    # Message composition
│   │   ├── MessageList.tsx     # Conversation display
│   │   ├── PeerList.tsx        # Contact management
│   │   ├── ProfileSetup.tsx    # User onboarding
│   │   ├── RecipientInput.tsx  # Address selection
│   │   ├── ThemeProvider.tsx   # Dark/light mode
│   │   └── WalletContextProvider.tsx  # Wallet integration
│   ├── lib/               # Core functionality
│   │   ├── crypto.ts      # Encryption utilities
│   │   ├── ipfs.ts        # IPFS integration
│   │   ├── peers.ts       # Peer management
│   │   ├── profile.ts     # User profiles
│   │   └── storage.ts     # Data persistence
│   ├── types/             # TypeScript definitions
│   ├── App.tsx            # Main application
│   ├── index.css          # Global styles
│   └── main.tsx           # Application entry point
└── tailwind.config.js     # Tailwind CSS configuration
```

### Building for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist` directory, ready for deployment to your preferred hosting service.

## Key UI Features

- **Dark Mode**: Sleek dark theme with Solana-inspired gradient accents
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Interactive Elements**: Smooth animations and transitions for a polished user experience
- **Accessibility**: High contrast text and interactive elements for better readability
- **Intuitive Navigation**: Clear visual hierarchy and consistent UI patterns

## Roadmap

The following features are planned for future development:

- **New Chat**: Streamlined interface for starting new conversations with any Solana address
- **Contacts Management**: Advanced contact organization with groups and favorites
- **Message Archive**: Searchable history of all conversations with filtering options
- **Group Messaging**: Potential future feature (currently disabled)
- **Enhanced File Sharing**: Future re-introduction of file sharing with broader formats
- **Profile Customization**: Additional profile settings and avatar support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Solana Foundation for blockchain infrastructure and inspiration

- TailwindCSS team for the excellent styling framework
- Lucide for the beautiful icon set
- The Web3 community for ongoing support and innovation

