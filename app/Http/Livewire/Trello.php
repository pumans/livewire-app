<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Trello extends Component
{
    public $name = 'puman';
    public $loud = false;
    public function resetName($name = 'Chico'){
        $this->name = $name;
    }

    public function render()
    {
        return view('livewire.trello');
    }
}
