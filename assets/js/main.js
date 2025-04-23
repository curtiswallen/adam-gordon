jQuery(document).ready(function($){
  // Configuration
  const fadeDuration = 1000;
  const slideDuration = 6000;
  
  // Initialize
  const $slides = $('#slideshow > div');
  const $captionDisplay = $('#image-caption-display');
  let currentIndex = 0;
  
  // Hide all slides except first
  $slides.not(':eq(0)').hide();
  $captionDisplay.html($slides.eq(0).find('.image-caption').html());
  
  function cycleSlides() {
      // Determine next index
      const nextIndex = (currentIndex + 1) % $slides.length;
      
      // Get slide elements
      const $currentSlide = $slides.eq(currentIndex);
      const $nextSlide = $slides.eq(nextIndex);
      const newCaption = $nextSlide.find('.image-caption').html();
      
      // Fade out current slide and caption
      $currentSlide.fadeOut(fadeDuration);
      $captionDisplay.fadeOut(fadeDuration/2);
      
      // After fade out completes
      setTimeout(() => {
          // Prepare next slide (hidden at start)
          $nextSlide.css('display', 'none');
          
          // Update caption
          $captionDisplay.html(newCaption);
          
          // Fade in next slide and caption
          $nextSlide.fadeIn(fadeDuration);
          $captionDisplay.fadeIn(fadeDuration/2);
          
          // Update current index
          currentIndex = nextIndex;
      }, fadeDuration);
  }
  
  // Start slideshow
  setInterval(cycleSlides, slideDuration);
});