$(() =>{

    // MAP MODAL
    const $openMapBtn = $('#openMapModal');
    const $mapModal = $('#mapModal');
    const $closeMapBtn = $('#closeMap');
    
    
    
    const openMapModal = () => {
        $mapModal.css('display', 'block')
        closeListModal()
    }
    $openMapBtn.on('click', openMapModal)
    
    const closeMapModal = () => {
        $mapModal.css('display', 'none')
    }
    $closeMapBtn.on('click', closeMapModal)


    // List MODAL
    const $openListBtn = $('#openListModal');
    const $listModal = $('#listModal');
    const $closeListBtn = $('#closeList');
    
    
    
    const openListModal = () => {
        $listModal.css('display', 'block');
        closeMapModal()
    }
    $openListBtn.on('click', openListModal)
    
    const closeListModal = () => {
        $listModal.css('display', 'none')
    }
    $closeListBtn.on('click', closeListModal)



})
