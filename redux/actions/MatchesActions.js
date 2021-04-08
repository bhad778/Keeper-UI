// we have an api call just for matches, because on the user object, matches is just an array
// with other users IDs in it, so we have to do a separate api call to get all the data about
// those users
export const updateMatches = (matches) => ({
  type: "UPDATE_MATCHES",
  payload: matches,
});
