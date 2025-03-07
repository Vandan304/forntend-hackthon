
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-confession',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-confession.component.html',
  styleUrl: './post-confession.component.css'
})
export class PostConfessionComponent {
  textBox: string = '';
  confessions: { userId: number; text: string; timestamp: string }[] = [];
  userIdCounter: number = 1;
  
  onSave() {
    if(this.textBox=='')
    {
      alert("Enter your confession:")
    }
    if (this.textBox.trim()) {
      const newConfession = {
        userId: this.userIdCounter++,
        text: this.textBox,
        timestamp: new Date().toLocaleString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      this.confessions.push(newConfession);
      this.resetForm();
    }
  }

  resetForm() {
    this.textBox = '';
  }

  messages: string[] = [
    "Every soul has a secret... What's yours?",
    "Confess your thoughts, anonymously...",
    "Your secrets are safe here..."
  ];

  currentMessage: string = "";
  private messageIndex = 0;
  private charIndex = 0;
  private typingSpeed = 80; // Base speed in ms

  ngOnInit(): void {
    this.typeNextMessage();
  }

  typeNextMessage() {
    if (this.charIndex < this.messages[this.messageIndex].length) {
      this.currentMessage += this.messages[this.messageIndex].charAt(this.charIndex);
      this.charIndex++;

      // Simulating a human-like typing speed
      let randomSpeed = this.typingSpeed + Math.random() * 80;
      setTimeout(() => this.typeNextMessage(), randomSpeed);
    } else {
      // Pause before erasing
      setTimeout(() => this.eraseText(), 2000);
    }
  }

  eraseText() {
    if (this.charIndex > 0) {
      this.currentMessage = this.currentMessage.substring(0, this.charIndex - 1);
      this.charIndex--;

      let randomSpeed = this.typingSpeed / 2;
      setTimeout(() => this.eraseText(), randomSpeed);
    } else {
      // Move to next message and restart typing
      this.messageIndex = (this.messageIndex + 1) % this.messages.length;
      setTimeout(() => this.typeNextMessage(), 500);
    }
  }
}
