import { API } from "../../backend";

//category calls
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/cacategory/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get all categories
export const getCategories = () => {
  return fetch(`${API}/cacategories`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const DeleteCA = (cacategoryId, userId, token) => {
  return fetch(`${API}/cacategory/${cacategoryId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
// Create Blogs
export const createaBlog = (userId, token, blog) => {
  return fetch(`${API}/blog/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: blog,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get all Blogs
export const getBlogs = () => {
  return fetch(`${API}/blogs`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// delete a Blog

export const DeleteBlogs = (blogId, userId, token) => {
  return fetch(`${API}/blog/${blogId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get a Blog
export const getoneBlog = (blogId) => {
  return fetch(`${API}/blog/${blogId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Update a Blog

export const UpdateOneBlogs = (blogId, userId, token, blog) => {
  return fetch(`${API}/blog/${blogId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: blog,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

////////   testi ///////////

//category calls
// export const createCategory = (userId, token, category) => {
//   return fetch(`${API}/category/create/${userId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(category),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// //get all categories
// export const getCategories = () => {
//   return fetch(`${API}/categories`, {
//     method: "GET",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// Create Facultys
export const createaFaculty = (userId, token, faculty) => {
  return fetch(`${API}/faculty/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: faculty,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get all facultys
export const getFacultys = () => {
  return fetch(`${API}/facultys`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// delete a faculty

export const DeleteFacultys = (facultyId, userId, token) => {
  return fetch(`${API}/faculty/${facultyId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get a faculty
export const getoneFaculty = (facultyId) => {
  return fetch(`${API}/faculty/${facultyId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Update a faculty

export const UpdateOneFacultys = (facultyId, userId, token, faculty) => {
  return fetch(`${API}/faculty/${facultyId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: faculty,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

///////////////////////// Free Course Video /////////////////////////////////////

// Create Free Course Video
export const createaFreecoursevideo = (userId, token, freecourse) => {
  return fetch(`${API}/freecoursevideo/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: freecourse,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get all Free Course Video
export const getFreecoursevideos = () => {
  return fetch(`${API}/freecoursevideos`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// delete a Free Course Video

export const DeleteFreecoursevideos = (freecourseId, userId, token) => {
  return fetch(`${API}/delete/${freecourseId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get a Free Course Video
export const getoneFreecoursevideo = (freecourseId) => {
  return fetch(`${API}/freecoursevideo/${freecourseId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Update a Free Course Video

export const UpdateOneFreecoursevideos = (
  freecourseId,
  userId,
  token,
  freecourse
) => {
  return fetch(`${API}/update/${freecourseId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: freecourse,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/////////////////////////////////  ctet course Video ///////////////////////////////////////////////////////////////////

// Create Free Course Video
export const createaCtet = (userId, token, ctet) => {
  return fetch(`${API}/ctet/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: ctet,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get all Free Course Video
export const getCtetvideos = () => {
  return fetch(`${API}/ctets`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// delete a Free Course Video

export const DeleteCtetvideos = (ctetId, userId, token) => {
  return fetch(`${API}/delete/${ctetId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get a Free Course Video
export const getoneCtetvideo = (ctetId) => {
  return fetch(`${API}/ctet/${ctetId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Update a Free Course Video

export const UpdateOneCtetvideos = (ctetId, userId, token, ctet) => {
  return fetch(`${API}/update/${ctetId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: ctet,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const user = () => {
  return fetch(`${API}/users`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getfeedback = (token) => {
  return fetch(`${API}//getfeedback`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getLocalcommentsubmit = (token) => {
  return fetch(`${API}/GetLocalCommentSubmit`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//create a product
export const createaCAffairs = (userId, token, faculty) => {
  return fetch(`${API}/PostCA/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: faculty,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
// TODO//////

//  get  C A
export const getCA = () => {
  return fetch(`${API}/getCA`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Delete CA

export const deleteCA = (cacategoryId, userId, token) => {
  return fetch(`${API}/CA/${cacategoryId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// create poll
// export const createaPoll = (userId, token, Poll) => {
//   return fetch(`${API}/polls/create/${userId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: Poll,
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

//get all categories
export const Polls = () => {
  return fetch(`${API}//polls`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deletePoll = (pollId, userId, token) => {
  return fetch(`${API}//poll/${pollId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Testimonials //

// Create Testi
export const createaTesti = (userId, token, testi) => {
  return fetch(`${API}/testi/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: testi,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get all testis
export const getTestis = () => {
  return fetch(`${API}/testis`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// delete a testi

export const DeleteTestis = (testiId, userId, token) => {
  return fetch(`${API}/testi/${testiId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get a testi
export const getoneTesti = (testiId) => {
  return fetch(`${API}/testi/${testiId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Update a testi

export const UpdateOneTesti = (testiId, userId, token, testi) => {
  return fetch(`${API}/testi/${testiId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: testi,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
