function cardSubmit() {
  const $btn = event.currentTarget
  const $card = $btn.closest('.js-card-rating')
  const $cardThanks = document.querySelector('.js-card-thanks')
  const $rate = $card.querySelector('.js-card-rating-item:checked')

  if (! $rate) return alert('Please, choose a note.')

  cardRate()
  cardHide($card)


  // functions
  function cardRate() {
    const $note = $cardThanks.querySelector('.js-card-note')

    if (! $note) return

    const note = $rate.value
    $note.innerHTML = note
  }

  function cardHide($target) {
    $target?.classList.add('slide-off')

    $target?.addEventListener('animationend', () => {
      $target?.classList.add('hidden')

      cardShow($cardThanks)
    }, {once: true})
  }

  function cardShow($target) {
    $target?.classList.add('slide-in')
    $target?.classList.remove('hidden')
  }
}