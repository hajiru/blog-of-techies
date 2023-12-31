const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#blogpost-name').value.trim(); 
  const description = document.querySelector('#blogpost-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/dashboard`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/dashboard/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};



document
  .querySelector('.new-blogpost-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blogpost-list')
  .addEventListener('click', delButtonHandler);