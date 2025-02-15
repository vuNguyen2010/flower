setTimeout(() => {
    document.querySelector('.intro').setAttribute("hidden", "true");
  }, 1500); // 2 seconds
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
