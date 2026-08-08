"use client";

import { useEffect, useRef } from "react";

function shouldPlay(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(target.closest("a, button"));
}

export default function InteractionSounds() {
  const contextRef = useRef<AudioContext | null>(null);
  const lockedRef = useRef(false);

  const ensureContext = () => {
    if (!contextRef.current) {
      contextRef.current = new window.AudioContext();
    }

    return contextRef.current;
  };

  const clickTick = () => {
    const ctx = ensureContext();
    if (ctx.state !== "running") {
      return;
    }

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(820, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.012, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  };

  useEffect(() => {
    const armContext = () => {
      if (lockedRef.current) {
        return;
      }

      const ctx = ensureContext();
      if (ctx.state !== "running") {
        void ctx.resume();
      }

      lockedRef.current = true;
    };

    const handlePointerDown = (event: Event) => {
      if (!shouldPlay(event.target)) {
        return;
      }

      armContext();
      clickTick();
    };

    window.addEventListener("pointerdown", handlePointerDown, true);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, []);

  return null;
}
