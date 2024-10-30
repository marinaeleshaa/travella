// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


  // Messages to display in the popover
  const messages = [
    "First message!",
    "Here's a second message!",
    "And a third message just for you!"
  ];
  let messageIndex = 0;

  // Initialize the popover
  const popoverTriggerEl = document.getElementById('popoverButton');
  const popover = new bootstrap.Popover(popoverTriggerEl, {
    content: messages[messageIndex]
  });

  // Event listener to change the message and show alert on each click
  popoverTriggerEl.addEventListener('click', () => {
    // Update message index and wrap around if it exceeds array length
    messageIndex = (messageIndex + 1) % messages.length;

    // Update popover content
    popover.setContent({ content: messages[messageIndex] });

    // Show an alert
    alert("Popover message updated!");
  });