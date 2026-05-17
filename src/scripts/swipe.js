export function addSwipe(element, handlers) {
  if (!element) return;

  let startX = 0;
  let startY = 0;
  let startedAt = 0;

  element.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startedAt = Date.now();
    },
    { passive: true },
  );

  element.addEventListener(
    "touchend",
    (event) => {
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;
      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY);
      const isQuickEnough = Date.now() - startedAt < 450;

      if (!isHorizontal || !isQuickEnough || Math.abs(deltaX) < 45) return;
      if (deltaX < 0) handlers.onLeft?.();
      if (deltaX > 0) handlers.onRight?.();
    },
    { passive: true },
  );
}
