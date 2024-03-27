function ExcluirRestaurante({id_restaurante}){
    fetch(`http://localhost:8000/restaurante/deletar/${id_restaurante}`, {
    method: 'DELETE',
})
.then(response => {
    if (!response.ok) {
        throw new Error('Erro ao enviar requisição');
    }
    console.log('Restaurante excluído com sucesso');
    window.location.reload();
})
.catch(error => {
    console.error('Erro ao excluir restaurante:', error);
});
}

export default ExcluirRestaurante