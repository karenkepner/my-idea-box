var ideaArray = [];

function CreateIdea(cardId, title, body, quality) {
    this.cardId = cardId;
    this.title = title;
    this.body = body;
    this.quality = quality;
}

function CreateIdea(cardId, title, body, quality) {
	this.cardId = cardId;
	this.title = title;
	this.body = body;
	this.quality = quality;
}

function ideaCard() {
	$('#display-area').html('');
	ideaArray.forEach(function(idea){
		$('#display-area').append(`<article id="${idea.cardId}" class="idea-card">
		<h3 contenteditable="true">${idea.title}</h3>
		<div id="delete-btn" class="vote"></div>
		<p class="card-body-text" contenteditable="true">${idea.body}</p>
		<div id="upvote" class="vote"></div>
		<div id="downvote" class="vote"></div>
		<p class="ranking">quality: <span id='rank'>${idea.quality}</span></p>
		</article>`);
		});
  };

function clearFields() {
    $('#title-input, #body-input').val("");
}

function addToLocalStorage(ideaArray) {
    localStorage.clear();
    var stringifiedArray = JSON.stringify(ideaArray);
    localStorage.setItem('cardId', stringifiedArray);
};

function retrieveLocalStorage() {
	ideaArray = JSON.parse(localStorage.getItem('cardId')) || [];
	return ideaArray;
};

$('#save-btn').on('click', function() {
    var title = $('#title-input').val();
    var body = $('#body-input').val();
    var cardId = Date.now();
    var quality = "swill";
    var newIdea = new CreateIdea(cardId, title, body, quality);
    ideaArray.push(newIdea);
    addToLocalStorage(ideaArray);
    ideaCard(ideaArray);
    clearFields();
});

$('#output-area').on('click', '#delete-btn', function() {
	var deleteCard = $(this).closest('.idea-card').attr('id');
	ideaArray = JSON.parse(localStorage.getItem('cardId'));
	ideaArray.splice(ideaArray.cardId = 'deleteCard', 1);
	addToLocalStorage(ideaArray);
	ideaCard();
});

$(window).on('load', function() {
	retrieveLocalStorage();
	ideaCard();
});

$('#output-area').on('click', '#delete-btn', function() {
    $('.idea-card').closest('#cardId').remove();
});

$('#display-area').on('click', '#upvote', function() {
    var $rank = $(this).parent().find('#rank');
    console.log(rank);
    if ($rank.text() === "swill") {
      $rank.text('plausible');
    } else if ($rank.text() === "plausible") {
      $rank.text('genius');
    }
});

$('#display-area').on('click', '#downvote', function() {
    var $rank = $(this).parent().find('#rank');
    if ($rank.text() === "genius") {
      $rank.text(' plausible ');
    } else if ($rank.text() === "plausible") {
      $rank.text(' swill');
    }
  });

$(window).on('load', function() {
    retrieveLocalStorage();
    ideaCard();
});
