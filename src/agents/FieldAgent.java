package agents;

import java.awt.BorderLayout;

import javax.swing.JFrame;
import javax.swing.JPanel;

import components.FieldPanel;

import madkit.gui.OutputPanel;
import madkit.kernel.Agent;

@SuppressWarnings("serial")
public class FieldAgent extends Agent {
	
	@Override
	public void setupFrame(JFrame frame) {

		JPanel fieldPanel = new FieldPanel();
		JPanel outputPanel = new OutputPanel(this);
		
		JPanel contentPane = new JPanel(new BorderLayout());
		contentPane.add(fieldPanel, BorderLayout.NORTH);
		contentPane.add(outputPanel, BorderLayout.CENTER);
		
		frame.setContentPane(contentPane);
		frame.pack();
		
		log("setupFrame " + this.getName());
	}
	
	@Override
	protected void activate() {
		//TODO bring players to life
	}

	@Override
	protected void live() {
		//TODO loop until play ends
		
		int nb = 10;
		while (nb-- > 0) {
			log("Playing... I will quit in " + nb + " seconds");
			pause(1000);
		}
	}

	@Override
	protected void end() {
		//TODO kill every player
		log("It`s over.");
		pause(2000);
	}

	private void log(String message){
		if (logger != null)
			logger.info(message);
	}
}
