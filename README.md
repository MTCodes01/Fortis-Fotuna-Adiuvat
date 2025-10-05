# Fortis Fortuna Adiuvat
### **Fortis Fortuna Adiuvat** combines NASA’s space imagery with 3D Solar System simulations to create an immersive, hands-on space exploration experience.
The software offers two main interactive modes:
1. 🌌 **Deep-Zoom NASA Image Explorer** – A Google Maps–style viewer that allows users to pan and zoom across gigapixel space imagery, complete with annotations and educational overlays.  
2. ☀️ **3D Solar System Simulation** – A WebGL-powered environment where users can explore planets and orbits around the Sun.  

This dual design not only educates but also excites users by blending **science, technology, and storytelling**. By making cosmic data engaging, the project fosters curiosity and brings the wonders of the universe closer to everyone.

# TEAM MEMBERS
1) Pavithra Madhusoodhanan
2) Sreehari S
3) Induchoodan VS
4) Sreedev S S
5) Harigovind P Nair

# Link to product walkthrough
https://1drv.ms/p/c/b299c4c6bae899e5/EXwGaQc5YT1GnAoXA_de3fsBJb9I0RwwblvHfV58ZxtSMQ?e=qpusjw

# OUTPUT
## Interactive User Interface ##
![Screenshot 2024-10-06 082737](https://github.com/user-attachments/assets/0f3dbfc8-9ffd-421b-ad43-65d17ef8bf50)

## 3-D Human Interactable JWST Model ##
![Screenshot 2024-10-06 082847](https://github.com/user-attachments/assets/0824fdb4-2bc9-4fe7-826f-57edd33fa64b)

## Many categories of images ##
![Screenshot 2024-10-06 082935](https://github.com/user-attachments/assets/cb07d8b3-a20e-4f0d-a042-0e51846de01c)

## JWST image slideshow with Mood based Music player ##
![Screenshot 2024-10-06 082948](https://github.com/user-attachments/assets/668dde9a-91c6-45fa-acce-266aa363bfb2)

## Interactive Quizes for user learning ##
![Screenshot 2024-10-06 082909](https://github.com/user-attachments/assets/9d84f5e0-7c7d-441e-8994-7d22a6f2bf7a)

## Interactive 3-D model of space with required details of each planet ##
![Screenshot 2024-10-06 083215](https://github.com/user-attachments/assets/3ac948f3-af26-4944-b955-4df2fa422eb4)

## Feedback form for future reference ##
![Screenshot 2024-10-06 090316](https://github.com/user-attachments/assets/185f2963-c3df-4538-92fa-a09daf833b6b)

# What exactly does it do?
**Fortis Fotuna Adiuvat** is an interactive web-based platform that allows users to explore space through two powerful experiences combined into a single interface.

---

## 🪐 3D Solar System Simulation

- Built using **Three.js** for realistic 3D visualization.  
- Features the **Sun, Earth, Mars, and Jupiter** with accurate textures and orbital motion.  
- Users can **zoom, rotate, and navigate** through the solar system.  
- Demonstrates how real-time 3D cosmic navigation can make astronomy more engaging and intuitive.  

---

## 🌌 High-Resolution NASA Image Explorer

- Powered by **OpenSeadragon** to handle deep-zoom NASA imagery.  
- Explore gigapixel-quality images like the **Andromeda Galaxy** or **Moon surface**.  
- Interactive **zoom and pan** experience, similar to Google Maps but for galaxies.  
- Annotation & labeling features help identify **nebulae, clusters, and other regions of interest**.  

---

## 🔗 Linking Both Worlds

- Bridges **real observational data** (NASA images) with **3D simulation data** (planetary models).  
- Provides a complete view—from **real telescope images** to **theoretical simulations**.  
- Future scope:  
  - Click on a galaxy in NASA imagery and compare it instantly with a **simulated cosmological model** (e.g., Illustris Project).  

---

## 🚀 Vision

Fortis Fotuna transforms raw NASA data into an **interactive educational and research experience**, making space exploration accessible and engaging for everyone—students, educators, and astronomy enthusiasts alike.  

---

# How does it work?
---

## 🖥️ Frontend Interface (React.js)

- Developed using **React** with two main tabs:  
  - **Image Explorer**  
  - **Simulation Explorer**  
- Clean, responsive, and intuitive design.  
- Allows seamless switching between **2D image exploration** and **3D simulation navigation**.  

---

## 🌌 High-Resolution Image Explorer (OpenSeadragon)

- NASA’s images are **processed into tiled layers** using **Libvips**.  
- **OpenSeadragon** dynamically loads and renders these tiles for **smooth zooming and panning**.  
- Features:  
  - Explore **gigapixel-quality space images**.  
  - Add **annotations** and learn about specific regions.  
---

## 🪐 3D Simulation Explorer (Three.js)

- Built using **Three.js** for 3D visualization.  
- Renders **Sun, Earth, Mars, and Jupiter** with **realistic textures and orbital motion**.  
- Interactive camera controls: **zoom, pan, rotate**.  
- Visually demonstrates **planetary movement and spatial relationships**.  
---

---

## 🌟 Benefits

- Enables **immersive learning and exploration** of the universe through interactive tools.  
- Combines **real NASA imagery** and **3D simulation** to make space science more accessible.  
- Promotes **STEM education** by visualizing complex astronomical data in an engaging way.  
- Lays the foundation for future tools linking **observation (NASA data)** and **simulation (cosmic models)**.  
- Supports **citizen science** by allowing users to label and analyze celestial objects interactively.  

---

## 🎯 Goals & Objectives

- Build a **prototype** demonstrating seamless exploration of NASA’s high-resolution space imagery and a simplified 3D solar system simulation.  
- Show how **real observational data** and **simulated cosmic models** can work together in a single experience.  
- Highlight the potential of **AI + Web technologies** for large-scale space visualization and interpretation.  
- Inspire a vision where users can **explore galaxies, label them, and compare real vs simulated data interactively**.  

---

## 🛠️ Tools, Languages, and Technologies

- **Frontend:** React.js  
- **3D Simulation:** Three.js (WebGL-based Solar System Model)  
- **Image Explorer:** OpenSeadragon (deep-zoom viewer)  
- **Image Processing:** Libvips (tiling NASA images into 256×256 tiles)  
- **Design Tools:** Figma / Canva (UI/UX mockups)  
- **Data Source:** NASA Image and Video Library (Andromeda Galaxy, Mars, Moon datasets)  
- **Deployment:** Personal Server

---

## 📂 NASA Data

**Primary Sources:**  
- NASA Andromeda Galaxy imagery  
- NASA Mars and Moon surface datasets  

**Used for:**  
- Building **deep-zoom demo tiles** in OpenSeadragon  
- Creating **visually accurate backdrops** for the prototype  

**Purpose:** Demonstrate scalable exploration of NASA’s **gigapixel imagery**.  

---

## 🌍 Space Agency Partner & Other Data

- Future integration with:  
  - **ESA (European Space Agency)**  
  - **Illustris Simulation API** (for theoretical cosmic analogs)  

These partnerships will enrich the platform with **multi-agency archives** and **simulated universe datasets**.  

---

## 🤖 Use of Artificial Intelligence (Future Scope)

AI integration planned for future scaling:  
- **Automatic labeling** of galaxies or features in NASA imagery.  
- **Recommendations** for related regions or simulations based on exploration.  
- **ML-based recognition** to classify celestial objects in real time.  

---






