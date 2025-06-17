'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function BuyMeACoffee() {
  useEffect(() => {
    // Add the custom styling and close button script
    const customScript = document.createElement('script');
    customScript.textContent = `
      window.addEventListener("DOMContentLoaded", function () {
        const interval = setInterval(() => {
          const widget = document.querySelector("iframe[title='Buy Me a Coffee Widget']");
          if (widget) {
            clearInterval(interval);

            // Resize the widget
            widget.style.transform = "scale(0.7)";
            widget.style.transformOrigin = "bottom right";

            // Add close button
            const closeBtn = document.createElement("button");
            closeBtn.textContent = "✖";
            closeBtn.style.position = "fixed";
            closeBtn.style.bottom = "90px";
            closeBtn.style.right = "20px";
            closeBtn.style.zIndex = "99999";
            closeBtn.style.background = "#fff";
            closeBtn.style.border = "1px solid #ccc";
            closeBtn.style.padding = "5px 10px";
            closeBtn.style.borderRadius = "4px";
            closeBtn.style.cursor = "pointer";

            document.body.appendChild(closeBtn);

            // Hide widget when close is clicked
            closeBtn.addEventListener("click", () => {
              widget.style.display = "none";
              closeBtn.style.display = "none";
            });
          }
        }, 300);
      });
    `;
    document.body.appendChild(customScript);

    return () => {
      document.body.removeChild(customScript);
    };
  }, []);

  return (
    <Script
      data-name="BMC-Widget"
      data-cfasync="false"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="umairfaiser"
      data-description="Support me on Buy me a coffee!"
      data-message="Help us keep this free forever!"
      data-color="#5F7FFF"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
      strategy="afterInteractive"
    />
  );
} 