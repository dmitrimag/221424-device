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
	if ( searchButton.classList.contains("hidden") && search.value )
	{
		searchButton.classList.remove("hidden");
	}
	else
	{
		if ( !search.value )
		{
			searchButton.classList.add("hidden");
		}
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