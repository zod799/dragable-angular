var imageFilenames = ["dsc_6001.jpg", "dsc_6081.jpg", "dsc_6013.jpg", "dsc_6268.jpg", "dsc_6397.jpg", "dsc_6345.jpg", "dsc_6378.jpg", "dsc_6413.jpg", "dsc_6417.jpg"];
var yStart, xStart;

function imageList($scope){
    $scope.images = imageFilenames;
}

function imgStore(e){
	e.dataTransfer.setData("img", e.target.id);
    yStart=e.y;
    xStart=e.x;
}
function allowDrop(e){
	e.preventDefault;
	yCurrent = e.y;
	xCurrent = e.x;
    var dataID = e.dataTransfer.getData("img");
    var data = $("#"+e.dataTransfer.getData("img"));
    
    if(dataID != e.target.id){
		if(xStart > xCurrent || yStart > yCurrent){//moving to the left or up
            $("#"+e.target.id).before(data);
        }else{
            $("#"+e.target.id).after(data);
        }
	}	
}

