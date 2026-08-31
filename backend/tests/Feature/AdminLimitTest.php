<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminLimitTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_registration_is_blocked_when_two_admin_accounts_exist(): void
    {
        User::factory()->count(2)->create();

        $response = $this->postJson('/api/register', [
            'name' => 'Third Admin',
            'email' => 'thirdadmin@example.com',
            'password' => 'password123',
        ]);

        $response->assertStatus(422)
            ->assertJson([
                'status' => false,
                'message' => "Only two admin allowed."
            ]);
    }
}