package agents;

import madkit.kernel.Agent;

@SuppressWarnings("serial")
public class FirstAgent extends Agent {

	@Override
	protected void activate() {
		//TODO get ready
		if (logger != null)
			logger.info("I`m ready!!!\n");
		//TODO wait until other players are ready

		pause(2000);
	}

	@Override
	protected void live() {
		//TODO do the play until it ends
		
		int nb = 10;
		while (nb-- > 0) {
			if (logger != null)
				logger.info("Playing... I will quit in " + nb + " seconds");
			pause(1000);
		}
	}

	@Override
	protected void end() {
		if (logger != null)
			logger.info("Time to relax.");
		pause(2000);
	}
}
