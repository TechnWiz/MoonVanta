"use client";

import { useEffect } from "react";

export function Cursor() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const cursor = document.querySelector<HTMLElement>(".cursor");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    if (!cursor || !ring) return;

    let frame = 0, targetX = -100, targetY = -100, ringX = -100, ringY = -100;
    const render = () => { ringX += (targetX - ringX) * .16; ringY += (targetY - ringY) * .16; cursor.style.transform = `translate3d(${targetX}px,${targetY}px,0)`; ring.style.transform = `translate3d(${ringX}px,${ringY}px,0)`; frame = requestAnimationFrame(render); };
    const move = (event: MouseEvent) => { targetX = event.clientX; targetY = event.clientY; };
    const interactive = document.querySelectorAll<HTMLElement>("a,button,select,input,textarea");
    const enter = () => document.body.classList.add("cursor-active"); const leave = () => document.body.classList.remove("cursor-active");
    document.body.classList.add("has-custom-cursor");
    window.addEventListener("mousemove", move, { passive: true });
    interactive.forEach((item) => { item.addEventListener("mouseenter", enter); item.addEventListener("mouseleave", leave); });
    frame = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("mousemove", move); document.body.classList.remove("has-custom-cursor", "cursor-active"); interactive.forEach((item) => { item.removeEventListener("mouseenter", enter); item.removeEventListener("mouseleave", leave); }); };
  }, []);
  return <><div className="cursor" aria-hidden="true" /><div className="cursor-ring" aria-hidden="true" /></>;
}
