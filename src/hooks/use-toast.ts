import { useState } from "react";

export function useToast() {
  const toast = ({ title, description }: { title: string; description?: string }) => {
    // Implementación temporal sencilla para mostrar el mensaje
    console.log("Toast:", title, description);
    alert(`${title}\n${description || ''}`);
  };

  return { toast };
}