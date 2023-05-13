const slides = document.querySelectorAll('.slide');
      const controls = document.querySelectorAll('.control');
      let currentSlide = 0;
      
      function showSlide(n) {
        if (n < 0) {
          currentSlide = slides.length - 1;
        } else if (n >= slides.length) {
          currentSlide = 0;
        } else {
          currentSlide = n;
        }
        
        slides.forEach(slide => slide.classList.remove('active'));
        controls.forEach(control => control.classList.remove('active'));
        
        slides[currentSlide].classList.add('active');
        controls[currentSlide].classList.add('active');
      }
      
      function nextSlide() {
        showSlide(currentSlide + 1);
      }
      
      function prevSlide() {
        showSlide(currentSlide - 1);
      }
      
      function setSlide(n) {
        showSlide(n);
      }
      
      controls.forEach((control, index) => {
        control.addEventListener('click', () => {
          setSlide(index);
        });
      });
      
      setInterval(() => {
        nextSlide();
      }, 5000);