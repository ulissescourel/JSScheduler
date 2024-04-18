function generateRandomSlots() {
    const now = new Date();
    const daysInWeek = 5; // Monday-Friday
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const businessHours = {
      start: 9, // 9am
      end: 18, // 6pm
    };
  
    const slots = [];
    for (let i = 0; i < 10; i++) {
      const randomDay = Math.floor(Math.random() * daysInWeek);
      const slotDate = new Date(now.getTime() + randomDay * millisecondsPerDay);
  
      const randomHour = Math.floor(Math.random() * (businessHours.end - businessHours.start)) + businessHours.start;
      slotDate.setHours(randomHour, 0, 0, 0);
  
      slots.push(slotDate);
    }
  
    return slots;
  }
  
  const timeSlots = generateRandomSlots();
  
  console.log("Initial time slots:");
  timeSlots.forEach((slot, index) => {
    console.log(`${index + 1}. ${slot.toLocaleString()}`);
  });
  
  // Collect user input
  const selectedSlots = [];
  let availableSlots = [...timeSlots];
  
  for (let i = 0; i < 10; i++) {
    console.log(`\nPlease select a time slot (1-${availableSlots.length}):`);
    const index = Number(prompt("Enter the index of the slot:"));
  
    if (isNaN(index) || index < 1 || index > availableSlots.length) {
      console.log("Invalid input. Please enter a number between 1 and 10.");
    } else {
      const selectedSlot = availableSlots[index - 1];  // Convert index from user to 0-based
  
      selectedSlots.push(selectedSlot);
      console.log(`Selected slot ${i + 1}: ${selectedSlot.toLocaleString()}`);
  
      const removedIndex = availableSlots.indexOf(selectedSlot);
      if (removedIndex !== -1) {
        availableSlots.splice(removedIndex, 1);
      }
  
      console.log("\nRemaining available slots:");
      availableSlots.forEach((slot, index) => {
        console.log(`${index + 1}. ${slot.toLocaleString()}`);
      });
    }
  }
  
  console.log("Final selection:");
  selectedSlots.forEach((slot, index) => {
    console.log(`Slot ${index + 1}: ${slot.toLocaleString()}`);
  });