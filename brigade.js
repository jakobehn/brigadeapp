const { events, Job, Group } = require("brigadier");

events.on("push", async () => {
    var compileStep = new Job("compile", "mcr.microsoft.com/dotnet/core/sdk:3.0")
    compileStep.tasks = [
        "cd src",
        "dotnet build",
      ];  

      var testStep = new Job("test", "mcr.microsoft.com/dotnet/core/sdk:3.0")
      testStep.tasks = [
          "cd src",
          "dotnet test",
        ];  

        var publishStep = new Job("publish", "mcr.microsoft.com/dotnet/core/sdk:3.0")
        publishStep.tasks = [
            "cd src",
            "dotnet publish",
          ];          
  
    Group.runEach([compileStep,testStep,publishStep])
    
  });
