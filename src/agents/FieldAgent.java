package agents;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

import madkit.gui.OutputPanel;
import madkit.kernel.Agent;

@SuppressWarnings("serial")
public class FieldAgent extends Agent {
	
	@Override
	public void setupFrame(JFrame frame) {

		JPanel fieldPanel = new JPanel();
		fieldPanel.setPreferredSize(new Dimension(160, 360));
		fieldPanel.setBackground(Color.GREEN);
		fieldPanel.add(new JLabel("CAMPO!"));
		
		
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
		//kill every player
		log("It`s over.");
		pause(2000);
	}

	private void log(String message){
		if (logger != null)
			logger.info(message);
	}
}
