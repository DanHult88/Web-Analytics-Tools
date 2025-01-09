// analytics.js

class WebAnalytics {
    constructor() {
      this.data = {
        pageViews: 0,
        clicks: [],
        sessionStart: new Date(),
        deviceInfo: this.getDeviceInfo(),
        performanceMetrics: {},
      };
  
      this.init();
    }
  
    init() {
      this.trackPageView();
      this.trackClicks();
      this.trackPerformanceMetrics();
      this.sendAnalytics();
    }
  
    trackPageView() {
      this.data.pageViews += 1;
      console.log(`Page viewed ${this.data.pageViews} times.`);
    }
  
    trackClicks() {
      document.addEventListener('click', (e) => {
        const clickData = {
          x: e.clientX,
          y: e.clientY,
          element: e.target.tagName,
          time: new Date(),
        };
        this.data.clicks.push(clickData);
        console.log('Click captured:', clickData);
      });
    }
  
    getDeviceInfo() {
      return {
        userAgent: navigator.userAgent,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        platform: navigator.platform,
      };
    }
  
    trackPerformanceMetrics() {
      window.onload = () => {
        const { loadEventEnd, navigationStart } = performance.timing;
        this.data.performanceMetrics.pageLoadTime = loadEventEnd - navigationStart;
        console.log(`Page Load Time: ${this.data.performanceMetrics.pageLoadTime}ms`);
      };
    }
  
    sendAnalytics() {
      // Send data to backend or save locally
      console.log('Analytics data ready to send:', this.data);
      // Example: Sending data to an endpoint
      // fetch('https://your-backend-endpoint.com/analytics', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(this.data),
      // });
    }
  }
  
  // Initialize the analytics tool
  const analytics = new WebAnalytics();
  