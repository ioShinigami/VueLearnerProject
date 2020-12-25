 RegisterNetEvent("OPEN EVENT")
  AddEventHandler("OPEN EVENT", function()   
    SendNUIMessage({
      type = "ourMessage"
    })
  end)

  RegisterNetEvent("CLOSE EVENT")
  AddEventHandler("CLOSE EVENT", function()   
    SendNUIMessage({
      type = "ourCloseMessage"
    })
  end)

 RegisterNUICallback("Close BUTTON", function(data, callback)
    SetNuiFocus(false, false)
    SetNuiFocusKeepInput(false)
    callback("ok")
  end)
  
  