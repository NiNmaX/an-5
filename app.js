const containerEl = document.querySelector(".container");

window.addEventListener("mousemove", (event) => {
  containerEl.innerHTML = `
    <div class="mouse-event">
       ${event.clientX}
       <h4>Mouse X O'qi(px)</h4>
    </div>
    <div class="mouse-event">
       ${event.clientY}
       <h4>Mouse Y O'qi(px)</h4>
    </div>
  `;
});