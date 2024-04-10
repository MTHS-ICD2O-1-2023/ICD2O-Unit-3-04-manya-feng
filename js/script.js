// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates fahrenheit to celsius.
 */
function calculateFahrenheitToCelsius() {
  // input
  const fahrenheitOfTemperature = parseFloat(document.getElementById("fahrenheit-of-temperature").value)

  // process
  const fahrenheitToCelsius = (fahrenheitOfTemperature - 32) * 5/9

  // output
  document.getElementById('celsius').innerHTML = 'Celsius is: ' + fahrenheitToCelsius.toFixed(3) + '°C'
}
