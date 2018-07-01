package com.cucumber.com.cucumber.pck;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="folder", glue={"com.cucumber.pck"},format={"pretty","html:F:\\Kiran workspace\\com.cucumber.pck\\target"})

public class TestRunner {

}
