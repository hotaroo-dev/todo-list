export function generateColors() {
  const randomColors = [
    { color: "#0D74CE", background: "#D5EFFF", borderColor: "#8EC8F6" },
    { color: "#CB1D63", background: "#FEDCE7", borderColor: "#EAACC3" },
    { color: "#218358", background: "#D6F1DF", borderColor: "#8ECEAA" },
    { color: "#CC4E00", background: "#FFDFB5", borderColor: "#F5AE73" },
    { color: "#5753C6", background: "#E6E7FF", borderColor: "#ABBDF9" },
  ];

  return randomColors[Math.floor(Math.random() * randomColors.length)];
}
