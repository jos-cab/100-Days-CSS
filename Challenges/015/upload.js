const input = $("#file");
const fileName = $(".file-name")[0];
const dropZone = $(".drop-zone")[0];
const dropZoneImg = $(".drop-zone img")[0];

input.on("drop change", (e) => {
	e.preventDefault();
	const files = e.originalEvent.dataTransfer.files;

	fileName.innerHTML = files[files.length - 1].name;
	fileName.style.display = "block";
	dropZoneImg.style.display = "none";
});

input.on("dragleave drop", (e) => {
	console.log(dropZone);
	dropZone.style.backgroundColor = "transparent";
	dropZone.style.border = "1px dashed #aaa";
});

input.on("dragover", (e) => {
	console.log(dropZone);
	dropZone.style.backgroundColor = "#ddd";
	dropZone.style.border = "1px dashed #666";
});
