package com.example.gemcalculator;

import org.apache.cordova.DroidGap;

import android.os.Bundle;

public class GemCalculator extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/calculator.html");
	}

}
