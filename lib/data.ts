import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import Drop from "@/public/Drop.png";
import predict from "@/public/Predict.jpg";
import AI from "@/public/AI.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Self-taught",
    location: "coimbatore, IN",
    description:
      "Learning and exploring maya(3D) art to build a career in tech by utilizing free online resources and applying for opportunities in the creative industry.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },

  {
    title: "Self-taught",
    location: "coimbatore,IN",
    description:
      "Utilizing Unreal Engine for real-time rendering to create high-quality, immersive 3D visuals and animations efficiently.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },

  {
    title: "Self-taught",
    location: "coimbatore, IN",
    description:
      "Learning and exploring React and Next.js development to build a career in tech by utilizing free online resources and applying for opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: " lighting and rendering ",
    description:
      "When it comes to lighting and rendering in 3D software like Blender, Maya, or Unreal Engine, there are the key concepts",
    tags: [
      "RayTracing",
      "UnrealEngineLighting",
      "Photorealism",
      "3DLighting",
    ],
    imageUrl: AI,
    link: "",
  },

  {
    title: "Journey Beyond Time",
    description:
      "• Story Creation and Implementation in Unreal Engine 5: Craft a captivating narrative and bring it to life using Unreal Engine 5's powerful tools for cinematic storytelling and real-time rendering.",
    tags: ["Storytelling", "rendering", "3D_unnreal", "photorealism"],
    imageUrl: Drop,
    link: "",
  },
  {
    title: "Simple react developer",
    description:
      "• A Simple React Developer builds dynamic user interfaces using React, focusing on creating reusable components and efficient web applications. ",
    tags: [
      "Python",
      "Tensorflow",
      "Numpy",
      "Pandas",
    ],
    imageUrl: predict,
    link: "",
  },
] as const;

export const skillsData = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "React.js",
  "Next.js",
  "Adobe Audition",
  "Autodesk Maya",
  "Unreal Engine 5",
  "Learning",


] as const;
