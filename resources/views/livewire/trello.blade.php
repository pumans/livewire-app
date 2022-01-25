<div>
    <input wire:model="name">
    <input wire:model="loud" type="checkbox">

    <h1> Hellow {{ $name }}  @if ($loud) ! @endif</h1>
    <form action="#" wire:submit.prevent="$set('name', 'Bingo')">
        <button>Reset name</button>
    </form>

</div>
