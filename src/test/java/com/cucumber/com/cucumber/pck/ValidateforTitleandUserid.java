package com.cucumber.com.cucumber.pck;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ValidateforTitleandUserid {
	
WebDriver driver;
	
	public Scenario s;
	@Before
	public void method(Scenario s)
	{
		
		this.s=s;
		
		
	}
	
	@Given("^launch site$")
	public void launch_site() throws Throwable {
		driver=new FirefoxDriver();
		driver.get("http://srssprojects.in/home.aspx");
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	   
	}

	@When("^check the tittle \"([^\"]*)\" data$")
	public void check_the_tittle_data(String title) throws Throwable {
	   
	   
		String actual=driver.getTitle();
		if(actual.equals(title))
		{
			s.write("tittle test is passed");
		}
		else
		{
			s.write("test is failed");
		}
		
	}

	@Then("^userid feild should be desplayed$")
	public void userid_feild_should_be_desplayed() throws Throwable {
	   driver.findElement(By.id("txtuId")).isDisplayed();
	    
	}

	@Then("^close site$")
	public void close_site() throws Throwable {
	    driver.close();
	   
	}

	@When("^enter the userid with value \"([^\"]*)\"$")
	public void enter_the_userid_with_value(String value) throws Throwable {
	   
	    driver.findElement(By.id("txtuId")).sendKeys(value);
	}

	@Then("^check the userid with criteria \"([^\"]*)\"$")
	public void check_the_userid_with_criteria(String c) throws Throwable {
	    try
	    {
		if(c.equals("valid") && driver.findElement(By.id("txtuId")).isDisplayed())
		{
			s.write("userid test is passed");
		}
		else if(c.equals("invalid") && driver.findElement(By.id("txtPword")).isDisplayed())
		{
			s.write("userid test is passed");
		}
		else
		{
			s.write("test is failed");
		}
	    }
		catch(Exception e)
		{
			s.write("userid field is incrupted");
		}
	    
	   
	}

}
