package components;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Rectangle;

import javax.swing.JLabel;
import javax.swing.JPanel;

@SuppressWarnings("serial")
public class FieldPanel extends JPanel {
	private int fieldWidth = yardToPixel(160/3);
	private int fieldHeight = yardToPixel(100);
	
	public FieldPanel(){

		this.setPreferredSize(new Dimension(fieldWidth, fieldHeight));
		this.setBackground(Color.GREEN);
		this.add(new JLabel("CAMPO!"));
	}
	
	public void paintComponent(Graphics g)
	{
	    super.paintComponent(g);
	    Graphics2D g2d = (Graphics2D)g;
	    g2d.setColor(Color.WHITE);
	    
	    Rectangle rect = new Rectangle(0, 180, fieldWidth, 2);
	    g2d.draw(rect);
	    g2d.fill(rect);
	    for(int i = 0; i < fieldHeight; i = i + yardToPixel(10)) {
		    rect = new Rectangle(0, i, fieldWidth, 2);
		    g2d.draw(rect);
		    g2d.fill(rect);
	    }
	}
	
	private int yardToPixel(int yards) {
		return yards * 3;
	}
}
