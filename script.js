function private() {
  send(
    "xhr=1&sid=82e6e71d64dbd1c2&lang=de&no_sidrenew=&name=Privat&fonbook=0&out_num=400&num_selection=sel_nums&num_1=400&num_5=7152&num_6=9299161&idx=1&back_to_page=%2Ffon_devices%2Ffondevices_list.lua&popup_url=&button_save=&oldpage=%2Ffon_devices%2Fedit_dect_num.lua"
  );
  document.getElementById("private").classList.add("click");
  setTimeout(
    () => document.getElementById("private").classList.remove("click"),
    100
  );
}

function work() {
  send(
    "xhr=1&sid=82e6e71d64dbd1c2&lang=de&no_sidrenew=&name=Arbeit+%26+Privat&fonbook=0&out_num=9299162&num_selection=sel_nums&num_1=400&num_5=7152&num_6=9299161&num_7=9299162&idx=1&back_to_page=%2Ffon_devices%2Ffondevices_list.lua&popup_url=&button_save=&oldpage=%2Ffon_devices%2Fedit_dect_num.lua"
  );
  document.getElementById("work").classList.add("click");
  setTimeout(
    () => document.getElementById("work").classList.remove("click"),
    100
  );
}

async function send(body) {
  await fetch("https://fritz.box/data.lua", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });
}
