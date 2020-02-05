function dynamicDropDown(listindex) {

  document.getElementById("subcategory").length = 0;

  switch (listindex)
  {

    case "goodman" :
      document.getElementById("subcategory").options[0]=new Option("Type of Equipment","reset");
      document.getElementById("subcategory").options[1]=new Option("Air-Conditioners","airConditioners");
      document.getElementById("subcategory").options[2]=new Option("Gas Furnaces","gasFurnaces");
      document.getElementById("subcategory").options[3]=new Option("Heat Pumps","heatPumps");
      document.getElementById("subcategory").options[4]=new Option("Thermostats","mfgThermostats");
      document.getElementById("subcategory").options[5]=new Option("IAQ / Accessories","indoorAirQualityAccessories");

      break;

    case "amana" :
      document.getElementById("subcategory").options[0]=new Option("Type of Equipment","reset");
      document.getElementById("subcategory").options[1]=new Option("Air-Conditioners","airConditioners");
      document.getElementById("subcategory").options[2]=new Option("Gas Furnaces","gasFurnaces");
      document.getElementById("subcategory").options[3]=new Option("Heat Pumps","heatPumps");
      document.getElementById("subcategory").options[4]=new Option("Thermostats","mfgThermostats");
      document.getElementById("subcategory").options[5]=new Option("IAQ / Accessories","indoorAirQualityAccessories");

      break;

    case "daiken" :
      document.getElementById("subcategory").options[0]=new Option("Type of Equipment","reset");
      document.getElementById("subcategory").options[1]=new Option("Mini-Splits","daikenMiniSplits");
      document.getElementById("subcategory").options[2]=new Option("Ducted Air-Handlers","daikenDuctlessAh");
      document.getElementById("subcategory").options[3]=new Option("Accessories","daikenAccessories");

      break;

    case "lennox" :
      document.getElementById("subcategory").options[0]=new Option("Type of Equipment","reset");
      document.getElementById("subcategory").options[1]=new Option("Air-Conditioners","airConditioners");
      document.getElementById("subcategory").options[2]=new Option("Gas Furnaces","gasFurnaces");
      document.getElementById("subcategory").options[3]=new Option("Oil Furnaces","lennoxOilFurnaces");
      document.getElementById("subcategory").options[4]=new Option("Heat Pumps","heatPumps");
      document.getElementById("subcategory").options[5]=new Option("Thermostats","mfgThermostats");
      document.getElementById("subcategory").options[6]=new Option("IAQ / Accessories","indoorAirQualityAccessories");

      break;

    case "bard" :
      document.getElementById("subcategory").options[0]=new Option("Type of Equipment","reset");
      document.getElementById("subcategory").options[1]=new Option("Oil Furnaces","bardOilFurnaces");

      break;

    case "nest" :
      document.getElementById("subcategory").options[0]=new Option("Type of Equipment","reset");
      document.getElementById("subcategory").options[1]=new Option("Thermostats","nestThermostats");
      document.getElementById("subcategory").options[2]=new Option("Smoke/CO Detectors","nestDetectors");
      document.getElementById("subcategory").options[3]=new Option("IP Cameras","nestCameras");
      document.getElementById("subcategory").options[4]=new Option("Smart Home Hubs","nestHubs");
      document.getElementById("subcategory").options[5]=new Option("Video Doorbells","nestDoorbells");
      document.getElementById("subcategory").options[6]=new Option("Other","nestOther");

      break;

    case "general" :
      document.getElementById("subcategory").options[0]=new Option("Type of Equipment","reset");
      document.getElementById("subcategory").options[1]=new Option("Thermostats","generalThermostats");
      document.getElementById("subcategory").options[2]=new Option("Other","generalOther");

      break;
  }
  return true;
}

function activeFormIndex() {
  var currentFormIndex = document.getElementById("subcategory").options.selectedIndex;
  return document.getElementById("subcategory").options[currentFormIndex].value;
}
