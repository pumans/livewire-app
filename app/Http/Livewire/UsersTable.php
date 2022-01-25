<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\User;

class UsersTable extends Component
{
    use WithPagination;

    public $sortField = 'name'; // default sorting field
    public $sortAsc = true; // default sort direction
    public $search = '';

    public function sortBy($field)
    {
        if ($this->sortField === $field) {
            $this->sortAsc = !$this->sortAsc;
        } else {
            $this->sortAsc = true;
        }

        $this->sortField = $field;
    }

    public function render()
    {
        return view('livewire.users-table', [
            'users' => User::search($this->search)
                ->orderBy($this->sortField, $this->sortAsc ? 'asc' : 'desc')
                ->simplePaginate(10),
        ]);
    }

    protected $listeners = ['delete', 'triggerRefresh' => '$refresh', 'triggerCreate' => 'CreateUser'];
    public $user;
    public function delete($id)
    {
        $user = User::find($id);


        $this->dispatchBrowserEvent('user-deleted', ['user_name' => $user->name]);
        $user->delete();
    }

    public function CreateUser(){
        return view('livewire.user-form');
    }
}
