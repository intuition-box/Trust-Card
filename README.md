# Trust Card

## Brainstorm 
https://whimsical.com/intuition-card-RSRrToPTbeq4WyeutRGe8U


**Trust Card** is a collection of **3D NFT cards**, designed to combine **rarity, reputation, and identity**.  
These cards act as **digital collectibles**, **invitation keys**, and **proofs of trust**, serving the **Intuition** ecosystem.  

👉 The collection will be released in **several waves**, each with a **limited number of cards** and a different rarity probability.  

---

## ✨ Concept

- 🎴 **NFT Cards**: each card is unique and comes with a rarity tier (Common, Rare, Epic, Legendary – or other names to be defined).  
- 👤 **Personalized**: each card integrates the holder’s avatar or character.  
- 🌊 **Successive waves**:  
  - **Wave 1**: reserved for Web3 / crypto personalities who are not (yet) part of the Intuition circle.  
  - Each holder receives **invitations** to pass the card on to others.  
  - Invitations are limited and can be unlocked either over time, or once they reach a certain **trust score**.  
  - **Rarity & waves**: minting a card during the **earlier waves increases the probability** of receiving a rare card.  
  - A **Wave 0** will later be opened for Intuition’s early members (e.g. *Relics* NFT holders).  

---

## 🖼️ NFT Experience

Each Trust Card NFT combines several visual layers:  

1. **Animated intro**: immersive sequence during mint.  
2. **Interactive 3D model**: rotate, zoom, and freely manipulate the card.  
3. **Static version**: high-resolution image, ideal for sharing or gallery display.  

---

## 🤝 Trust Mechanism

- When a holder sends an invitation, they can **trust** the invited person.  
- The recipient can then **trust back**, creating a reciprocal link.  
- If several people invite the same user:  
  - the existing invitation is flagged,  
  - but the person can still establish a **trust** relationships with others.  

👉 These interactions build a **social trust graph**, visually represented (Gource-style) to show:  
- who passed a card to whom,  
- which relationships became mutual through trust back,  
- how reputation flows across the ecosystem,
- ...

In addition to this global visualization, a **score checker** and interactive profiles will allow users to:  
- click on any profile to see their direct relationships,  
- view their **trust score** (based on direct links and trusted people who also trust them),  
- see **how many mutual connections** exist,  
- measure the **degrees of separation** between themselves and another person in the graph.  

---

## 🎁 Physical Cards

- Premium print (limited edition per wave?)  
- Format and holder to be defined  
- **QR code** → direct link to the NFT  
- **NFC chip** → instant verification + prestige at events  
- Distinction between waves (specific designs).  

---

## 🔮 Bonus & Extensions

- **Relics bonus**: holders of *Relics* will see their cards enhanced with extra visuals or something else.  
- **Personal domain**: option to provide a **subdomain**.  
- **Score checker**: tool to view a user’s **trust score** globally or by domain.

---


# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
