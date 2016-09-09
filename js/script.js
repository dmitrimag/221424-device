"use strict";

/* ---------------------------------------------------------------------------------------------------- */
/* ----- VARIABLES ----- */
/* ---------------------------------------------------------------------------------------------------- */

var search = document.querySelector( ".search__text" );
var searchButton = document.querySelector( ".search__button" );

/* ---------------------------------------------------------------------------------------------------- */
/* ----- FUNCTIONS ----- */
/* ----- All functions start with a verb with a capital letter and use CamelCase  ----- */
/* ---------------------------------------------------------------------------------------------------- */

function ToggleSearchButton()
{	
	if ( search.value )
	{
		searchButton.style.display = "inline-block";
	}
	else
	{
		searchButton.style.display = "none";
	}
}

/* ---------------------------------------------------------------------------------------------------- */
/* ----- INITIALIZING ----- */
/* ----- Can be deprecated ----- */
/* ---------------------------------------------------------------------------------------------------- */

(function()
{
	search.addEventListener( "input", ToggleSearchButton, false );
}
)();