import madkit.kernel.Madkit;

public class Main {
	public static void main(String[] args) {
		System.out.println("I`m not a agent...");
		System.out.println("BUT HE IS!!!");
		String[] args2 = { "--launchAgents",
				"agents.FirstAgent,true" }; // This agent with GUI
		Madkit.main(args2);
	}
}
