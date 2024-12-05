//CRUD: Create, Read, Update, Delete
//Post; Get; Put; Delete

describe('Testing API', () => { 
    let postId;
    it('Crear un recurso (POST)', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/', {
            title: 'Nuevo Post',
            body: 'Aca iría el contenido del post',
            userId:1,
        }).then((response) => {
            expect(response.status).to.eq(201);
            postId = response.body.id; 
        })
    })

    it('Leer el recurso (GET)', () => {
        cy.request({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            failOnStatusCode: false,
        }). then((response) => {
            if (response.status === 404) {
                cy.log('Recurso no encontrado');
            } else {
                expect(response.status).to.eq(200);
                expect(response.body.title).to.eq('Nuevo Post');
                expect(response.body.body).to.eq('Aca iría el contenido del post');
                expect(response.body.userId).to.eq(1);
            }
        })
    })

    it('Actualizar el recurso (PUT)', () => { 
        cy.request({
            method: 'PUT',
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            body:{title:'Nuevo nombre'},
            failOnStatusCode: false,
        }). then((response) => {
            // expect(response.status).to.eq(200); //Si la API persistiera los datos.
            expect(response.status).to.eq(500); // cuando la API no persiste resalmente los cambios.
           
        })
    });

    it('Eliminar el recurso (DELETE)', () => { 
        cy.request({
            method: 'DELETE',
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            body:{title:'Nuevo nombre'},
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200); //Solo porque simula la eliminación
        });
    });
})
