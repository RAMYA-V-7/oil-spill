import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  features = [
    {
      title: 'Enhanced Accuracy and Early Detection',
      description: 'CNNs excel at identifying subtle patterns in images, leading to significantly improved accuracy in oil spill detection compared to traditional methods.'}
      ,
    {
      title: 'Real-Time Monitoring',
      description: 'This enables immediate response measures and facilitates better decision-making for containment and cleanup efforts.'
    },
    {
      title: 'Reduced Costs',
      description: 'Automating oil spill detection can significantly reduce the reliance on manual monitoring, which can be expensive and labor-intensive.'
    },
    {
      title: 'Scalability and Adaptability',
      description: 'The system can be readily scaled to cover larger geographic areas or adapted to handle diverse environmental conditions by retraining the CNN model on new data specific to the region of interest.'
    }
  ];

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      console.log(file);
    }
  }

  onSubmit() {
    console.log('Submit button clicked');
  }
}
