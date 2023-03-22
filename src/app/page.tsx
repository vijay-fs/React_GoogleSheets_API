"use client";
import axios from "axios";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Components/form";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Form />;
}
